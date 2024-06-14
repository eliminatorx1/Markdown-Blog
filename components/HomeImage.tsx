import Image from "next/image"
const HomeImage = () =>{
   
        return(
      
          <div className="image-container">
            <Image
              src="/images/agl2.png" // Adjust the path to your image
              alt="Description of image"
              width={10000}
              height={600}
              // fill = {true}
            />
          </div>
         
       
        )
    
}
export default HomeImage;