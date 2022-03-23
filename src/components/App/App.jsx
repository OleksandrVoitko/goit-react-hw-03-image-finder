import { Component } from "react";
import SearchBar from "../SearchBar";
import { Wrapper } from "./App.styled";
import getImg from "../../servises/api";
import ImageGallery from "../ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.searchImg(searchQuery, page);
    }
    return;
  }

  handleChangeSearch = (searchQuery) => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        searchQuery,
        page: 1,
        images: [],
      });
    }
    return;
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  searchImg = async () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();

    try {
      const data = await getImg(searchQuery, page);
      this.setState(({ images }) => {
        return { images: [...images, ...data.hits] };
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.toggleLoading();
    }
  };

  render() {
    const { images } = this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.handleChangeSearch} />
        {images.length > 0 && <ImageGallery images={images} />}
      </Wrapper>
    );
  }
}

export default App;
