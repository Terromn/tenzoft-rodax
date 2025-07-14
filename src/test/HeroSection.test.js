// Basic functionality tests for HeroSection component
// Since Astro doesn't have built-in testing, these are integration-style tests

/**
 * Test Suite for Rodax Refacciones Hero Section
 * 
 * These tests validate:
 * 1. Component structure and content
 * 2. Accessibility features
 * 3. Responsive design elements
 * 4. Call-to-action functionality
 */

// Mock test data that matches the component
const testData = {
  title: "Refacciones de Calidad para Camiones Pesados",
  subtitle: "Entrega inmediata en Saltillo • Servicio personalizado • Marcas de confianza",
  ctaText: "Ver Catálogo de Productos",
  ctaLink: "/catalog",
  
  trustedBrands: [
    { name: "Fleetguard", logo: "/brands/fleetguard.png" },
    { name: "Donaldson", logo: "/brands/donaldson.png" },
    { name: "Philips", logo: "/brands/philips.png" },
    { name: "AMTRK", logo: "/brands/amtrk.png" }
  ],
  
  keyFeatures: [
    {
      icon: "🚚",
      title: "Entrega Inmediata",
      description: "En Saltillo mismo día, envío gratis a domicilio"
    },
    {
      icon: "🔧",
      title: "Servicio Personalizado",
      description: "Asesoría experta para cada tipo de vehículo"
    },
    {
      icon: "⭐",
      title: "Calidad Garantizada",
      description: "Solo marcas reconocidas mundialmente"
    }
  ]
};

// Test functions that can be run in browser console
const tests = {
  
  // Test 1: Verify basic structure exists
  testBasicStructure() {
    console.log('🧪 Testing basic structure...');
    
    const heroSection = document.querySelector('section[role="banner"]');
    const companyLogo = document.querySelector('h1');
    const mainTitle = document.querySelector('h2');
    const ctaButton = document.querySelector('a[role="button"]');
    
    const results = {
      heroExists: !!heroSection,
      logoExists: !!companyLogo,
      titleExists: !!mainTitle,
      ctaExists: !!ctaButton
    };
    
    console.log('Basic Structure Results:', results);
    return Object.values(results).every(Boolean);
  },
  
  // Test 2: Verify content is properly displayed
  testContent() {
    console.log('🧪 Testing content...');
    
    const companyName = document.querySelector('h1');
    const mainHeading = document.querySelector('h2');
    const features = document.querySelectorAll('[class*="grid"] > div');
    
    const results = {
      companyNameCorrect: companyName?.textContent?.includes('RODAX'),
      headingExists: !!mainHeading?.textContent,
      featuresCount: features.length >= 3
    };
    
    console.log('Content Results:', results);
    return Object.values(results).every(Boolean);
  },
  
  // Test 3: Verify accessibility features
  testAccessibility() {
    console.log('🧪 Testing accessibility...');
    
    const heroSection = document.querySelector('section');
    const ctaButtons = document.querySelectorAll('a[role="button"]');
    const headings = document.querySelectorAll('h1, h2, h3');
    
    const results = {
      hasAriaLabel: !!heroSection?.getAttribute('aria-label'),
      buttonsHaveAriaLabel: Array.from(ctaButtons).every(btn => btn.hasAttribute('aria-label')),
      properHeadingStructure: headings.length >= 2
    };
    
    console.log('Accessibility Results:', results);
    return Object.values(results).every(Boolean);
  },
  
  // Test 4: Verify responsive elements
  testResponsive() {
    console.log('🧪 Testing responsive design...');
    
    const gridElements = document.querySelectorAll('[class*="grid"]');
    const flexElements = document.querySelectorAll('[class*="flex"]');
    
    const results = {
      hasGridElements: gridElements.length > 0,
      hasFlexElements: flexElements.length > 0,
      hasResponsiveClasses: document.querySelector('[class*="lg:"]') !== null
    };
    
    console.log('Responsive Results:', results);
    return Object.values(results).every(Boolean);
  },
  
  // Test 5: Run all tests
  runAllTests() {
    console.log('🚀 Running all HeroSection tests...\n');
    
    const testResults = {
      structure: this.testBasicStructure(),
      content: this.testContent(),
      accessibility: this.testAccessibility(),
      responsive: this.testResponsive()
    };
    
    const allPassed = Object.values(testResults).every(Boolean);
    
    console.log('\n📊 Final Test Results:');
    console.log(testResults);
    console.log(allPassed ? '✅ All tests passed!' : '❌ Some tests failed');
    
    return { testResults, allPassed };
  }
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.HeroSectionTests = tests;
  console.log('HeroSection tests loaded! Run window.HeroSectionTests.runAllTests() to test.');
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tests, testData };
} 