export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{props.data && props.data.title}</h2>
          <p>
           {props.data && props.data.text}
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.spyware.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <div className="">
                  <img src={d.image} className="img-responsive center-block" alt=""></img>
                  </div>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
