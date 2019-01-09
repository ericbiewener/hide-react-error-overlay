const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    for (const node of mutation.addedNodes) {
      if (node instanceof HTMLIFrameElement) {
        node.onload = () => {
          const doc = node.contentWindow.document
          if (doc.body.textContent.includes("Unhandled Rejection (ResponseError): SENTRY IGNORE: Not Found")) {
            const closeButton = doc.querySelectorAll('[title="Click or press Escape to dismiss."]')[0]
            if (closeButton) closeButton.click()
          }
        }
      }
    }
  }
});

observer.observe(document.body, { childList: true });
