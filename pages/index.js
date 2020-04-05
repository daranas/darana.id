import Layout from '../components/layout'
import Head from 'next/head'

export default function Index () {
  return (
    <Layout>
      <Head>
        <title>DaranaSV - Freelance Front End Developer, Web Programmer Based in Bandung, Indonesia</title>
      </Head>
      <div className="col-lg-11 col-xl-9">
        <section className="pt-4 pt-lg-5">
          <div className="card mb-3">
            <div className="card-header position-relative min-height-holder mb-7">
              <div className="bg-holder rounded-soft rounded-bottom-0"></div>
              <div className="avatar avatar-5xl avatar-profile"><img className="rounded-circle img-thumbnail shadow-sm" src="/static/assets/images/foto.png" width="200" alt="" /></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <h4 className="mb-1">
                    Darana Sukma Vidya
                    <svg className="svg-inline--fa fa-check-circle fa-w-16 text-primary ml-1" data-toggle="tooltip" data-placement="right" title="" data-fa-transform="shrink-4 down-2" aria-labelledby="svg-inline--fa-title-mjJZsiLfDDzH" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" data-original-title="Verified">
                      <title id="svg-inline--fa-title-mjJZsiLfDDzH">Verified</title>
                      <g transform="translate(256 256)">
                        <g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)">
                          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path>
                        </g>
                      </g>
                    </svg>
                  </h4>
                  <h5 className="fs-0 font-weight-normal">Senior Software Engineer</h5>
                  <p className="text-500">Bandung, Indonesia</p>
                </div>
                <div className="col pl-2 pl-lg-3 text-right align-sm-none">
                  <a className="btn btn-sm btn-secondary btn-cv" href="#"><i className="material-icons">save_alt</i> Download CV</a>
                </div>
              </div>
              <hr className="my-3" />
              <div className="row">
                <div className="col-md-12">
                  <p className="small">My name is Darana Sukma Vidya, I am a software developer specialized in front-end development with over <span className="YearExp">7</span> years experience. I have lots of experience in the production of HTML, CSS and JavaScript for modern websites.</p>
                  <p className="small">I love to develop UIs. I care about UX, responsiveness, performance, maintainability and scalability.</p>
                  <p className="small mb-1">Passionate about design, UI/UX, typography and web technologies, always trying to make an extra effort to learn new approaches and techniques. Enjoy working in a team as well as solo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="card card-project">
            <div className="card-body">
              <div className="card-title">
                <h5 data-filter-by="text" className="H5-filter-by-text">Experiences</h5>
              </div>
              <div className="card-body">
                <div className="timeline timeline-one-side" data-timeline-content="axis">
                  <div className="timeline-block">
                    <span className="timeline-step"></span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">2016 - present</small>
                      <h6>Web Developer at Webpixels</h6>
                      <p className="text-sm lh-160">When we strive to become better than we are everything around us becomes better too. This is a wider card with supporting text below.</p>
                      <div>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">Bootstrap</span>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">UI/UX</span>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">Market Strategy</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step timeline-step-sm"></span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">2014 - 2016</small>
                      <h6>Front Designer at Google</h6>
                      <p className="text-sm lh-160">When we strive to become better than we are everything around us becomes better too. This is a wider card with supporting text below.</p>
                      <div>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">HTML5</span>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">CSS3</span>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">Responsive Design</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step timeline-step-sm"></span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">2013 - 2014</small>
                      <h6>Internship at Apple</h6>
                      <p className="text-sm lh-160">When we strive to become better than we are everything around us becomes better too. This is a wider card with supporting text below.</p>
                      <div>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">Product Design</span>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">Development</span>
                        <span className="badge badge-pill badge-secondary mr-2 mb-2">Market Strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h5>Capabilities</h5>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-project">
                <div className="card-body">
                  <div className="card-title">
                    <a href="#">
                      <h6>Front-End Development</h6>
                    </a>
                  </div>
                  <p className="small">I like to work closely with designers to faithfully translate their designs right down to the last pixel. On a daily basis you'll find me using HTML, SCSS / BEM, JavaScript / ES2016 and Git with VS Code, Neat, WordPress and Vue / Nuxt, in order to bring creative designs to life.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-project">
                <div className="card-body">
                  <div className="card-title">
                    <a href="#">
                      <h6>Web Design &amp; Development</h6>
                    </a>
                  </div>
                  <p className="small">A majority of websites I build today are content managed as standard. I find that the Laravel Framework is often a great choice because it's mature and stable with a built-in REST API. It provides my client's with full editorial control in a way that's intuitive and friendly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <div className="card-list">
                <div className="card-list-body filter-list-1585738217566">
                  <div className="card card-task">
                    <div className="card-body">
                      <div className="card-title">
                        <a href="#">
                          <h6 data-filter-by="text" className="H6-filter-by-text">Javascript</h6>
                        </a>
                      </div>
                      <div className="card-body">
                        <div>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Product Design</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Development</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Market Strategy</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Product Design</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Development</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Market Strategy</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Product Design</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Development</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Market Strategy</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Product Design</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Development</span>
                          <span className="badge badge-pill badge-secondary mr-1 mb-1">Market Strategy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
