import './sass/style.scss'

const Index = () => {
  return (
    <>
      <footer className='footer'>
          <div className="container">
            <div className="footer_wrapper">
              <div className="footer_left">
                  <div className="info">
                    <h3>396 mi</h3>
                    <p>Range (EPA est.)</p>
                  </div>
                  <div className="info">
                    <h3>1.99s</h3>
                    <p>0-60 mph*</p>
                  </div>
                  <div className="info">
                    <h3>200mph</h3>
                    <p>Top Speed†</p>
                  </div>
                  <div className="info">
                    <h3>1,020hp</h3>
                    <p>Peak Power</p>
                  </div>
              </div>
              <div className="footer_right">
                <button><b>Order now</b> <span><i class="fa-solid fa-forward"></i></span></button>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Index