async function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    let elapsed = 0;
    let interval = setInterval(() => {
      let element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
      elapsed += 500;
      if (elapsed >= timeout) {
        clearInterval(interval);
        reject(
          new Error(
            `Timeout: Element with selector not found ${selector}`
          )
        );
      }
    }, 500);
  });
}

async function waitForXPath(xpath, context = document, timeout = 5000) {
  return new Promise((resolve, reject) => {
    let elapsed = 0;
    let interval = setInterval(() => {
      let element = document.evaluate(
        xpath,
        context,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
      elapsed += 500;
      if (elapsed >= timeout) {
        clearInterval(interval);
        reject(
          new Error(`Timeout: Element not found with XPath ${xpath}`)
        );
      }
    }, 500);
  });
}

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function run() {
  try {
    let adButton = await waitForElement("span.ytp-ad-button-icon");
    if (adButton) {
      adButton.click();

      await delay(800); 

      const iframe = document.getElementById("iframe");
      if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const blockButtonXPATH = '//button[contains(@aria-label, "Bloquear")]';

        const blockButton = await waitForXPath(blockButtonXPATH, iframeDocument);
        if (blockButton) {
          blockButton.click();

          const continueButtonXPATH = '//div[@class="Eddif"]/div[@role="button"][2]';
          const continueButton = await waitForXPath(continueButtonXPATH, iframeDocument);
          if (continueButton) {
            continueButton.click();

            const closeButtonXPATH = '//c-wiz//button[@aria-label="Cerrar"]';
            const closeButton = await waitForXPath(closeButtonXPATH, iframeDocument);
            if (closeButton) {
              closeButton.click();
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error blocking ads: ${error.message}`);
  } finally {
    setTimeout(run, 1000);
  }
}

// window.onload = run;
window.addEventListener('yt-navigate-start', run, true);