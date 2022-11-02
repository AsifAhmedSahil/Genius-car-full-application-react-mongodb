import React from 'react'

const BannerItems = ({slide}) => {
    const {image ,id,next,prev} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carosole-img">
        <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        

        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-24  top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>

        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 w-2/5 left-24  top-1/2">
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            eum.
          </p>
        </div>

        <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 w-2/5 left-24  top-3/4">
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-outline btn-success">Success</button>
        </div>

        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
  )
}

export default BannerItems