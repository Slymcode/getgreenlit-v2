export const  FG = () => {


    const formData = new FormData();
    formData.append('title', 'This is a title');
    formData.append('title1', 'This is a title1');
    formData.append('title2', 'This is a title2');

    // Display the values
  for (const value of formData.values()) {
    console.log(value);
  }

}