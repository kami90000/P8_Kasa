import PropTypes from "prop-types";

function Banner({background, title}) {
    return (
        <div className="banner">
            <img src={background} className="banner-img" alt="Banner"/>
            <h1 className="banner-title">{title}</h1>
        </div>
    )
}

export default Banner

Banner.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
};