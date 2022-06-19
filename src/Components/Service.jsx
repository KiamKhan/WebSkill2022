import React from 'react'

export default function Service() {
  return (
        <section className='section-gap'>
            <div className='sm:container mx-auto'>
                <div>
                    <h3 className='secondary_head'>our services</h3>
                </div>

                <div className='grid gap-6 md:grid-cols-3 grid-cols-1'>
                    <div className='text-center'>
                        <h4 className='inner-head'>graphic design</h4>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis illo inventore. Provident alias eum laudantium itaque? Sit, eligendi consequuntur. Nulla iusto voluptatem odit pariatur. Sit illo asperiores sequi libero.</p>
                    </div>

                    <div className='text-center'>
                        <h4 className='inner-head'>web design</h4>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis illo inventore. Provident alias eum laudantium itaque? Sit, eligendi consequuntur. Nulla iusto voluptatem odit pariatur. Sit illo asperiores sequi libero.</p>
                    </div>

                    <div className='text-center'>
                        <h4 className='inner-head'>web development</h4>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis illo inventore. Provident alias eum laudantium itaque? Sit, eligendi consequuntur. Nulla iusto voluptatem odit pariatur. Sit illo asperiores sequi libero.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
