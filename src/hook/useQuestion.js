import { useMutation, useQuery } from "react-query";
import DataApi from "../api/DataApi";

import createPersistedState from "use-persisted-state";
const useQuestionState = createPersistedState("question");

const QuestionApi = {
  isAuthenticated: false,
  async upsertApi(body) {
    const data = await DataApi.post("question/upsert", body);
    return data?.data;
  },
  async getAllApi() {
    const data = await DataApi.post("question/getAll");
    return data?.data;
  },
};

// Create a custom hook
export default function useQuestion() {
  const [question, setQuestion] = useQuestionState();
  const [upsertmutate] = useMutation(QuestionApi.upsertApi);
  const { data, isLoading, isError, error } = useQuery(
    ["question-list"],
    QuestionApi.getAllApi,
    {
      enabled: isLoggedIn,
    }
  );

  const upsert = async (body) => {
    try {
      const data = await upsertmutate(body);
      if (data?.isSuccess) {
        setQuestion(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAll = () => {
    setQuestion(null);
  };

  const getById = () => {
    setQuestion(null);
  };

  return {
    question,
    upsert,
    getAll,
    getById,
  };
}
