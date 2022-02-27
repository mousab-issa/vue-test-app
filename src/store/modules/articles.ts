import END_POINTS from "@/config/END_POINTS";
import AxiosInstance from "@/lib/AxiosInstance";

const state: State = {
  loading: false,
  articles: [],
};

const getters = {
  getArticles: (state: State) => state.articles.slice(0, 10),
  isLoading: (state: State) => state.loading,
};

const actions = {
  async fetchArticles({ commit }: any) {
    try {
      commit("startFetching");
      const response = await AxiosInstance.get(END_POINTS.ARTICLES.GET);
      if (response.data) {
        commit("setArticles", response.data);
        return;
      }
      commit("fetchArticlesFaild");
    } catch (e) {
      commit("fetchArticlesFaild");
    }
  },
};

const mutations = {
  startFetching: () => {
    return (state.loading = true);
  },
  setArticles: (state: State, articles: Article[]) => {
    state.articles = articles;
    state.loading = false;
  },
  fetchArticlesFaild: (state: State) => {
    state.loading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
