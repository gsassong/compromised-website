export const Platforms = (props) => {
  return (
    <div id='platforms' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Platforms</h2>
        </div>
        {props.data &&
          <div className='row'>
            <div key={`${props.data.ios.label}`} className='col-xs-12 col-md-6'>
              {' '}
              <img src={props.data.ios.icon} className="img-responsive center-block" alt="" />{" "}
              <h3>{props.data.ios.title}</h3>
              <p>{props.data.ios.text}</p>
            </div>
            <div key={`${props.data.android.label}`} className='col-xs-12 col-md-6'>
              {' '}
              <img src={props.data.android.icon} className="img-responsive center-block" alt="" />{" "}
              <h3>{props.data.android.title}</h3>
              <p>{props.data.android.text}</p>
            </div>
          </div>
        }

      </div>
    </div>
  )
}
