// this script is written based on this webpage => https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// run this script in the chrome console when visiting this webpage to view the result

let links = document.querySelectorAll('.mw-category a')

if (links) {

  let boulevards = Array.from(links)

  let boulevardsNames = boulevards.map(function(boulevard) {

    return boulevard.innerText

  })

  let boulevardsDeETC = boulevardsNames.filter((boulevardsName) => boulevardsName.includes("de"))

  console.table(boulevardsDeETC);

}