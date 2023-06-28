export const RecipesData = {
  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5))
  },
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10))
  },
  getProducts() {
    return Promise.resolve(this.getProductsData())
  },
  getProductsData() {
    return [
      {
        id: 1,
        title: 'Mac and cheese',
        description: 'Awesome dinner.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg',
        courses: ['lunch', 'dinner'],
        isFavourite: false,
        isOwned: false
      },
      {
        id: 2,
        title: 'Fish salad',
        description: 'Eat everyday!',
        imageURL:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        courses: ['lunch', 'breakfast'],
        isFavourite: false,
        isOwned: true
      },
      {
        id: 3,
        title: 'Pancakes',
        description: 'Sweet as fuck :D',
        imageURL:
          'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
        courses: ['breakfast', 'dinner'],
        cuisines: ['american'],
        isFavourite: true,
        isOwned: true
      },
      {
        id: 4,
        title: 'Pizza',
        description: 'Mamma mia Italiano',
        imageURL:
          'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
        courses: ['lunch', 'dinner'],
        cuisines: ['italian'],
        isFavourite: true,
        isOwned: false
      },
      {
        id: 5,
        title: 'Something green',
        description: 'Maybe good',
        imageURL:
          'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        courses: ['lunch', 'snack'],
        isFavourite: false,
        isOwned: false
      },
      {
        id: 6,
        title: 'Mac and cheese',
        description: 'Awesome dinner.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg',
        courses: ['lunch', 'dinner'],
        cuisines: ['american'],
        isFavourite: false,
        isOwned: false
      }
    ]
  }
}
