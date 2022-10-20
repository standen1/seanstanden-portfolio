import React from 'react';
import styles from './MenuToggle.module.scss';

export interface MenuToggleProps {
    active: boolean;
    onClick: Function;
}

export default function MenuToggle(props: MenuToggleProps) {
  return (
    <button className={styles.MenuToggle} data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" >
        <div className="navToggleButton">
            <span className={props.active ? "bar1Active" : "bar1"}></span>
            <span className={props.active ? "bar2Active" : "bar2"}></span>
            <span className={props.active ? "bar3Active" : "bar3"}></span>
        </div>
    </button>
  )
}
