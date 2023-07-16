import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="mx-auto min-w-[1280px] bg-gray-700">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                {children}
            </div>
        </div>
     );
}
 
export default BasicLayout;