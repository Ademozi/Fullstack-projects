import { useEffect, useState } from "react";
import { getFavorites, deleteFavorite } from "../services/favoriteService";

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = async () => {

        try {

            const data = await getFavorites();

            setFavorites(data.favorites);

        } catch (error) {

            console.error(error);

        }

    };


    useEffect(() => {

        fetchFavorites();

    }, []);


    const handleDelete = async (id) => {

        try {

            await deleteFavorite(id);

            // Refresh the list after deletion
            fetchFavorites();

        } catch (error) {

            console.error(error);

        }

    };


    return (
        <div>

            <h2>
                ⭐ My Favorites
            </h2>


            {favorites.length === 0 ? (

                <p>
                    No favorite cities yet.
                </p>

            ) : (

                favorites.map((favorite) => (

                    <div key={favorite._id}>

                        <h3>
                            {favorite.city}, {favorite.country}
                        </h3>


                        <button
                            onClick={() => handleDelete(favorite._id)}
                        >
                            🗑️ Remove
                        </button>

                    </div>

                ))

            )}

        </div>
    );
}

export default Favorites;