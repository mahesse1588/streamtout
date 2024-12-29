<script>
    // Fonction pour redimensionner toutes les images
    function resizeImages(width, height) {
        const images = document.querySelectorAll("img"); // Sélectionne toutes les images
        images.forEach(image => {
            image.style.width = width + "px"; // Applique la largeur
            image.style.height = height + "px"; // Applique la hauteur
            image.style.objectFit = "cover"; // S'assure que l'image conserve son ratio sans déformation
        });
    }

    // Appel de la fonction avec les dimensions souhaitées
    resizeImages(200, 200); // Exemple : 200px x 200px
</script>

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Senpai Stream!');
});
