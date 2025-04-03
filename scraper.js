const puppeteer = require("puppeteer");

(async () => {
  // launch the browser to control and open a new page
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  console.log("x");

  await page.goto("https://rivalstracker.com/profile/1931070464");
  //await page.waitForSelector('.card', {timeout: 45000});#
  
  //const rankBlock = await page.$$(".rank-title");

//same as document.getElementsByClassName("rank-title") in browser console
  //const x = await page.$$eval('.rank-title');
   

  //Extracting the Current Rank from the page
  const currentRankElement = await page.$(".rank_content .text-container .rank-text .rank-title");
  if (currentRankElement) {
    const innerText = await page.evaluate(el => el.innerText, currentRankElement);
    const currentRank = innerText
    
    console.log(currentRank);
  }

  //Extracting the Peak Rank from the page
  // Have to use $$ selector to return everything and then the second element is the peak rank [1]
  const peakRankElement = await page.$$(".rank_content .text-container .rank-text .rank-title");
  if (peakRankElement) {
    const innerText = await page.evaluate(el => el.innerText, peakRankElement[1]);
    const peakRank = innerText
    
    console.log(peakRank);
  }

  
  //#__nuxt > div > section > div > div.profile_overview > div.profile_overview_side > div.rank-block > div.rank_content > div.text-container > div.rank-text > span.rank-title
  //const currentRank = await page.evaluate(() => querySelector("div.profile_overview_side > div.rank-block > div.rank_content >").textContent)
  
  //console.log(currentRank)

 // console.log(rankElements)


   




  // browser automation for web scraping...

  // close the browser and release resources
  await browser.close();
})();

