import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullScreenNav' className='h-screen text-white py-15 w-full absolute bg-amber-900'>
            <div className='all-links mt-[8vw]'>
                <div className='link border-t-1 border-white'>
                    <h1 className='font-[font2] text-[6vw] text-center leading-[0.8] pt-4 uppercase'>Projects</h1>
                    <div className='absolute flex'> 
                        <div className='flex overflow-auto items-center'>
                            <h2 className='font-[font2] whitespace-nowrap text-[6vw] text-center leading-[0.8] pt-4 uppercase'>See everything</h2>
                            <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920-1200x1920.jpg" alt="" className='h-24 w-60 shrink-0 rounded-full object-cover'/>
                            <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center leading-[0.8] pt-4 uppercase'>See everything</h2>
                            <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" className='h-24 w-60 shrink-0 rounded-full object-cover' />
                        </div>
                    </div>
                </div>

                {/* <div className='link border-t-1 border-white'>
                    <h1 className='font-[font2] text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Agence</h1>
                    <div> 
                        <div>
                            <h2>See everything</h2>
                            <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920-1200x1920.jpg" alt="" className='h-full w-full'/>
                            <h2>See everything</h2>
                            <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" className='h-full w-full' />
                        </div>
                        <div>
                            <h2>See everything</h2>
                            <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920-1200x1920.jpg" alt="" />
                            <h2>See everything</h2>
                            <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default FullScreenNav
