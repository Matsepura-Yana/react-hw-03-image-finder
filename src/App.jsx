import { Searchbar } from './Searchbar'
import { ImageGallery } from 'ImageGallery'
import { Button } from 'Button'
import { getSearchProductsApi } from './api'
import { Component } from 'react'

class App extends Component {
    state = { data: [], page: 1 }

    submitFunction = async e => {
        e.preventDefault()
        const data = await getSearchProductsApi(
            e.target.elements.searchbarInput.value
        )

        this.setState(() => {
            return { data: data.hits }
        })
    }

    loadMoreFunction = async () => {
        this.setState(prevState => {
            return { page: prevState.page + 1 }
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Searchbar onSubmit1={this.submitFunction}></Searchbar>
                <ImageGallery arr={this.state.data}></ImageGallery>
                <Button loadMoreFunction={this.loadMoreFunction}></Button>
            </>
        )
    }
}

export default App
