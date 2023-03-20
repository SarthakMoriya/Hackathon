import React, { useEffect } from 'react';

function GoogleTranslate() {
  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'pa',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    }

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  function triggerTranslate() {
    const dropdown = document.querySelector('.goog-te-combo');
    if (dropdown) {
      dropdown.selectedIndex = 1;
      dropdown.dispatchEvent(new Event('change'));
    }
  }

  return (
    <div>
      <div id="google_translate_element"></div>
      <button onClick={() => triggerTranslate()}>Translate</button>
    </div>
  );
}

export default GoogleTranslate;
