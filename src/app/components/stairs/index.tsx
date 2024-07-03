import React from 'react'
import styles from './style.module.scss';
import { height, background, mountAnim } from '../stairs/anim';
import { motion } from 'framer-motion';

export default function index({background, stairsColor}: any) {

  return (
    <div className={styles.stairs+" "+ background + ' '+ stairsColor}>
      {
        [...Array(5)].map( (_, index) => {
          return <Stair key={index} index={index}/>
        })
      }
      <Background />
    </div>
  )
}

const Stair = ({index}: any) => {
  return <motion.div 
  variants={height} 
  {...mountAnim}
  custom={4 - index} 
  className={styles.stair}>
  </motion.div>
}

const Background = () => {
  return <motion.div 
    variants={background} 
    {...mountAnim}
    className={styles.background}>
  </motion.div>
}