function shareSite() {
    const url = "https://krishnaverse-dev.github.io/krishnaverse/";

    if (navigator.share) {
        navigator.share({
            url: url
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(url)
            .then(() => alert("Link copied to clipboard!"))
            .catch(() => alert("Failed to copy link."));
    }
}