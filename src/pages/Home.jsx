import Banner from "../components/Banner";
import Card  from "../components/Card";
import PropTypes from "prop-types";

export default function Home({ data }) {
    const background = "src/assets/images/Image-source-1.jpg";
    const title = "Chez vous, partout et ailleurs";

    return (
        <>
            <Banner background={background} title={title}/>
            <section className="home_content">
              {data && (
                  <div className="card-list">
                      {data.map((annonce) => (
                          <Card key={annonce.id} link={`/annonce/${annonce.id}`} title={annonce.title} cover={annonce.cover} data={annonce}/>
                      ))}
                  </div>
              )}
            </section>
        </>
    );
}

Home.propTypes = {
    data: PropTypes.array,
};


