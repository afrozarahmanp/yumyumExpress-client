import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import '../Featured/Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-3 my-20">
            <SectionTitle
                subHeading='Check It Out'
                heading='Featured Items'
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 py-10 pl-3 pr-3 md:py-20 md:px-10 lg:px-36 bg-black bg-opacity-40 space-y-3">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2030</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores cumque hic similique repellendus ad accusantium quibusdam suscipit ut nemo. Consequatur ad sunt enim voluptas, dolores autem provident! Adipisci iste officiis facilis, consequuntur repellendus magnam laudantium et asperiores explicabo</p>
                    <button className="btn btn-outline text-white mt-3 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;