<script>

function image_tag(path_to_image, alt) {
    var s = ""
    s = s.concat(
        "<img src=\"",
        path_to_image,
        "\" alt=\"",
        alt,
        "\"/>"
    )
    return s
}

const image_paths = [
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
    "cat4.jpg",
    "cat5.jpg",
    "cat6.jpg",
    "cat7.jpg"
]

var image_tags_as_string = ""
var ncounter = 0
for (const n in image_paths) {
    let path_to_image = image_paths[n]
    image_tags_as_string = image_tags_as_string.concat(
        "\n",
        image_tag(path_to_image, "Image " + String(ncounter))
    )
    ncounter += 1
}
</script>



<div class="listImages">
	{@html image_tags_as_string}
</div>



<style>
    .listImages {
		display: grid;
		grid-template-rows: auto;
		justify-items: center;
		gap: 10px;
	}
</style>