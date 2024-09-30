import headerImg from '../../images/header.jpg';
import './header.css';
export default function Header(){
    return(
        <>
        <div style={{position:'relative'}}>
         <img src={headerImg} style={{width:'100%',height:'100vh'}} alt="" />
          <div className="_overlay">
          </div>
          <div className='_title'>
          <h3 >Online Shop</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sapiente beatae at, temporibus pariatur velit non! Eius vel possimus reprehenderit? Sequi corrupti magnam asperiores consequuntur nemo accusamus recusandae nisi harum!</p>
          </div>
        </div>
        </>
    );
}