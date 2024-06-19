export function imageCatalog(current_image, image_paths) {
    this.current_image = current_image
    this.image_paths = image_paths

    let image_name = current_image.substring(current_image.lastIndexOf("/") + 1)
    for (let i = 0; i < image_paths.length; i++) {
        let to_compare = image_paths[i].substring(image_paths[i].lastIndexOf("/") + 1);
        if (image_name == to_compare) {
            this.current_index = i;
            break;
        }
    }
    this.get_image = () => {return this.current_image};
    this.next_image = () => {
        if ((this.current_index + 1) < this.image_paths.length - 1) {
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
