import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { getAnimals } from '../../api';
import ButtonCustom from '../../component/Button';

function Animals({ functionChangeToken }) {
    const [listAnimals, setListAnimals] = useState();
    const [tokenLocalStorage] = useState(localStorage.getItem('jwt_token'));
    const getListAnimal = async (token) => {
        const data = await getAnimals(token);
        setListAnimals(data.animals);
    };

    const handleLogout = () => {
        localStorage.clear();
        functionChangeToken(true);
    };

    useEffect(() => {
        getListAnimal(tokenLocalStorage);
    }, [tokenLocalStorage]);

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1 className={styles.heading_text}>LIST ANIMALS</h1>
                <div className={styles.heading_logout}>
                    <ButtonCustom type="button" nameButton="Logout" onClick={handleLogout} />
                </div>
            </div>
            <div className={styles.content}>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>age</th>
                        <th>Gender</th>
                        <th>Coat</th>
                    </tr>
                    {
                        listAnimals?.map((animal, index) => {
                            return (
                                <tr key={index}>
                                    <td>{animal.id}</td>
                                    <td>{animal.name}</td>
                                    <td>{animal.type}</td>
                                    <td>{animal.age}</td>
                                    <td>{animal.gender}</td>
                                    <td>{animal.coat}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
export default Animals;