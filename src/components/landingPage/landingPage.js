import React from 'react';
import styles from './landingPage.module.css'
import gemographyLogo from '../../images/gemographyLogo.png'

export class landingPage extends React.Component {


    render() {
        return (
            <div>
                <div className={styles.pageBase}>
                    <img className={styles.gemoLogo} src={gemographyLogo} alt="" />
                    <h1 className={styles.gemoText}>gemography</h1>
                </div>
                <div className={styles.githubParag}>
                    <p>
                        Find out the most starred Github repos that were created in the last 30 days
                    </p>
                </div>

            </div>
        )
    }
}