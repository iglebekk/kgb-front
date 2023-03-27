import Layout from '../components/layout';
import Hero from '../components/hero';
import Image from 'next/image';



export default function Home() {
  return (
    <Layout>

      <div className="grid">
        <div>
          <h1>Våre verdier er integritet, bærekraft
            og ansvarlighet
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis quod perspiciatis officiis, dolorem deserunt similique soluta molestiae sed error. Accusantium nulla animi porro debitis at esse voluptate mollitia autem?</p>
        </div>

        <div>
          <Image
            src="/../public/images/worker.jpeg"
            width={1024}
            height={500}
            alt="Bygger"
          />
        </div>

      </div>
      <article>
        <center><h1 id="projects">Våre prosjekter</h1></center>
        <div className="grid">
          <div>
            <h2>Enebolig Lillesand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia saepe voluptatum nisi ad optio libero distinctio quasi, laboriosam ipsam? Natus nesciunt harum in aspernatur minus.</p>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>

              <Image
                src="/../public/images/house.jpg"
                width={500}
                height={500}
                alt="Hus"
              />
            </div>
          </div>
          <div>
            <h2>Enebolig Lillesand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia saepe voluptatum nisi ad optio libero distinctio quasi, laboriosam ipsam? Natus nesciunt harum in aspernatur minus.</p>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>

              <Image
                src="/../public/images/house.jpg"
                width={500}
                height={500}
                alt="Hus"
              />
            </div>
          </div>
          <div>
            <h2>Enebolig Lillesand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia saepe voluptatum nisi ad optio libero distinctio quasi, laboriosam ipsam? Natus nesciunt harum in aspernatur minus.</p>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>

              <Image
                src="/../public/images/house.jpg"
                width={500}
                height={500}
                alt="Hus"
              />
            </div>
          </div>
        </div>
        <div className="grid">
          <div>
            <h2>Enebolig Lillesand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia saepe voluptatum nisi ad optio libero distinctio quasi, laboriosam ipsam? Natus nesciunt harum in aspernatur minus.</p>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>

              <Image
                src="/../public/images/house.jpg"
                width={500}
                height={500}
                alt="Hus"
              />
            </div>
          </div>
          <div>
            <h2>Enebolig Lillesand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia saepe voluptatum nisi ad optio libero distinctio quasi, laboriosam ipsam? Natus nesciunt harum in aspernatur minus.</p>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>

              <Image
                src="/../public/images/house.jpg"
                width={500}
                height={500}
                alt="Hus"
              />
            </div>
          </div>
          <div>
            <h2>Enebolig Lillesand</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi, pariatur reprehenderit fugiat officia saepe voluptatum nisi ad optio libero distinctio quasi, laboriosam ipsam? Natus nesciunt harum in aspernatur minus.</p>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>

              <Image
                src="/../public/images/house.jpg"
                width={500}
                height={500}
                alt="Hus"
              />
            </div>
          </div>
        </div>
      </article>
      <div className="grid">
        <div>
          <h1 id="contact">Kontakt oss for en uforpiktende prat</h1>
          <div>
            <p>
              <a href="mailto:post@kongsgardbygg.no">post@kongsgardbygg.no</a><br />
            </p>
            <p>
              Kongsgård Bygg AS<br />
              Løpeveien 16<br />
              4600 Kristiansand <br />
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="grid">
              <article>
                <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                  <Image
                    src="/../public/images/dan.jpg"
                    width={200}
                    height={200}
                    alt="Dan<"
                  />
                </div>
                <p>
                  <strong>Dan Gabrielsen</strong><br />
                  Daglig leder<br />
                  T: 47 47 47 47<br />
                  E: dan@kongsgardbygg.no
                </p>
              </article>
              <article>
                <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                  <Image
                    src="/../public/images/dan.jpg"
                    width={200}
                    height={200}
                    alt="Dan<"
                  />
                </div>
                <p>
                  <strong>Dan Gabrielsen</strong><br />
                  Daglig leder<br />
                  T: 47 47 47 47<br />
                  E: dan@kongsgardbygg.no
                </p>
              </article>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  )
}
