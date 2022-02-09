const React = require('react')
const Def = require('./default')

    function home () {
        return (
          <Def>
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/> */}
            <link rel="stylesheet" href="/css/style.css"/>
              <main>
                  <head>
                       <h1>REST-RANT</h1>
                  </head>
                  <div className="col-sm-6">
    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
    alt="Walnut Salad"/>
                    </div>
       Photo by <a href="https://unsplash.com/@shootdelicious">Eiliv-Sonas Aceron</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
            <br></br>
            <br></br>
            <div class = "row">

                <div class="column">
                    <img src="public/images/h-thai-m-l logo.png" alt="H-Thai-M-L"/>
                    </div>

                <div class="column">
                    <img src="public/images/burger king.png" alt="Burger King"/>
                </div>

                <div class="column">
                    <img src="public/images/sarvanana bhavan.png" alt="Sarvana Bhavan"/>
                </div>

                <div class="column">
                    <img src="public/images/veggie grill.png" alt="Veggie Grill"/>
                </div> 

                <div class="column">
                    <img src="public/images/panda express.png" alt="Panda Express"/>
                </div> 

                <div class="column">
                    <img src="public/images/kawaii kitty cafe.png" alt="Kawaii Kitty Cafe"/>
                </div> 
                <br></br>
            </div>
                <h4>Learn more about each place!!</h4>
              <a href="/places2">
  <button className="btn-primary">Places Page</button>
              </a>
              </main>
        </Def>
        )
    }

module.exports = home