import React from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
const Header = () => {
const navigate = useNavigate();
function sendToHome() {
    navigate('/');
  }
    return (
        <section className="d-flex flex-column justify-content-center">
  { (window.location.href != "https://quizzlybears.netlify.app/" && window.location.href !=  "https://quizzlybears.netlify.app/results") &&
        <motion.button onClick={sendToHome} className="btn mx-auto mt-3 my-auto border border-light text-light leaderboard-home"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.5}}
          whileHover={{ scale: 0.85 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 400,
              restDelta: 0.001
            }
          }}>Home</motion.button>
        }
        { (window.location.href ==  "https://quizzlybears.netlify.app/results") &&
        <a className="mx-auto" href="https://quizzlybears.netlify.app/">
        <motion.button className="btn mx-auto mt-3 my-auto border border-light text-light leaderboard-home"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.5}}
          whileHover={{ scale: 0.85 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 400,
              restDelta: 0.001
            }
          }}>Home</motion.button>
          </a>
        }
        <section className="container">
            <header className="text-center pb-5 pt-1 mx-5">
                <div>
                    <motion.h1
        className='text-light display-5'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.7 }}
        exit={{ opacity: 0, scale: 0, x: "-100vh"}}
        whileHover={{ scale: 0.8 }}
        transition={{
            delay: 0.3,
            x: { duration: 2 },
            default: { ease: "linear" }
          }}
      >Quizzly Bears
      </motion.h1>
                </div>
                <hr className="mx-5 bg-dark"/>
             </header>
        </section>
      </section>

     );
}

export default Header;
