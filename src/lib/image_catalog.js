export function imageCatalog(current_image, image_paths) {
    this.get_filename = (image_path) => {
        let file_name = image_path.substring(image_path.lastIndexOf("/") + 1);
        if (file_name.includes("\\")) {
            // Image is using windows path separator character \
            file_name = file_name.substring(file_name.lastIndexOf("\\") + 1);
        }
        return file_name
    }

    this.current_image = current_image
    this.image_paths = image_paths
    let image_name = this.get_filename(current_image)
    for (let i = 0; i < image_paths.length; i++) {
        let to_compare = this.get_filename(image_paths[i]);
        if (image_name == to_compare) {
            this.current_index = i;
            break;
        }
    }

    this.find_image_index = (image_path) => {
        let image_name = this.get_filename(image_path)
        // console.log("Image that I looking for: ", image_name)
        for (let i = 0; i < this.image_paths.length; i++) {
            let to_compare = this.get_filename(this.image_paths[i]);
            // console.log("Image compare: ", to_compare)
            if (image_name == to_compare) {
                return i;
            }
        }
        return null;
    }
    this.set_current_image = (image) => {
        this.current_image = image;
        this.current_index = this.find_image_index(image)
        console.log("Current index", this.current_index)
    };
    this.set_current_image_with_index = (index) => {
        this.current_index = index;
        this.current_image = this.image_paths[index];
    }
    this.get_image = () => {return this.current_image};
    this.next_image = () => {
        if ((this.current_index + 1) < this.image_paths.length) {
            this.current_index = this.current_index + 1;
        }
        this.current_image = this.image_paths[this.current_index]
    }

    this.previous_image = () => {
        if ((this.current_index - 1) >= 0) {
            this.current_index = this.current_index - 1;
        }
        this.current_image = this.image_paths[this.current_index]
    }

}
