import api from './api'

class FeedService {
  static async getAllFeed() {
    const response = await api.get('feed')
    return response
  }

  static async getSavedFeed() {
    const response = await api.get('feed?saved=1')
    return response
  }
}

export default FeedService
