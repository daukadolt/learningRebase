const { createWorker } = require('tesseract.js');

const worker = createWorker({
    logger: m => console.log(m)
});

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(text);
    console.log('this is a print by seekmtheseeker');
    await worker.terminate();
})();