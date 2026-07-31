const backSurfaceFixed = (flag = true) => {
  const root = document.querySelector('html');

  if (root) {
    const scrollPos = flag ? window.scrollY : Number.parseInt(root.style.top);

    const styles: Partial<Record<keyof CSSStyleDeclaration, string | number>> =
      {
        position: 'fixed',
        left: '0px',
        top: `${scrollPos * -1}px`,
        overflowY: 'scroll',
      };

    root.style.width = '100%';
    for (const property in styles) {
      // https://strix.main.jp/?diys=typescript_htmlelement_style
      root.style.setProperty(property, flag ? <string>styles[property] : '');
    }

    if (!flag) {
      window.scrollTo(0, scrollPos * -1);
    }
  }
};

export default backSurfaceFixed;
