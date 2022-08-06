import { useQuery, useMutation } from "react-query";
import {
  getStorageAuthenticityToken,
  getStorageInstitutionId,
} from "utils/local-storage";
import { API_VERSION, instance as axios } from "services";

const useSignInMutation = () => {
  return useMutation("signIn", async ({ email, password }) => {
    const { data } = await axios.post("users/sign_in.json", {
      user: { email, password },
    });
    return data;
  });
};

const useCreateJWTMutation = () => {
  return useMutation("createJWT", async ({ userId }) => {
    const { data } = await axios.post(
      `${API_VERSION}/create_jwt.json`,
      { payload: { user_id: userId } },
      { params: { access_token: getStorageAuthenticityToken() } }
    );
    return data;
  });
};

const useJWTValidationMutation = () => {
  return useMutation("JWTValidation", async ({ jwt }) => {
    const { data } = await axios.post(`${API_VERSION}/jwt_validation`, { jwt });
    return data;
  });
};

const useSurveyListQuery = () => {
  return useQuery("surveyList", async () => {
    const { data } = await axios.get(
      `${API_VERSION}/survey/surveys_list.json`,
      {
        params: { access_token: getStorageAuthenticityToken() },
      }
    );
    return data;
  });
};

const useSurveyAnswersCicleQuery = (survey_id, survey_schedule_id) => {
  return useQuery(
    ["surveyAnswersCicle", survey_id, survey_schedule_id],
    async () => {
      const { data } = await axios.get(
        `${API_VERSION}/survey_answers_cicle.json`,
        {
          params: {
            survey_id,
            survey_schedule_id,
            access_token: getStorageAuthenticityToken(),
          },
        }
      );
      return data;
    },
    {
      enabled: !!survey_id && !!survey_schedule_id,
    }
  );
};

const useResultAvgQuery = (survey_id, survey_schedule_id) => {
  return useQuery(
    ["resultAvg", survey_id, survey_schedule_id],
    async () => {
      const { data } = await axios.get(`${API_VERSION}/survey/result_avg`, {
        params: {
          survey_id,
          survey_schedule_id,
          access_token: getStorageAuthenticityToken(),
        },
      });
      return data;
    },
    {
      enabled: !!survey_id && !!survey_schedule_id,
    }
  );
};

const useResultPerDimensionQuery = (survey_id, survey_schedule_id) => {
  return useQuery(
    ["resultPerDimension", survey_id, survey_schedule_id],
    async () => {
      const { data } = await axios.get(
        `${API_VERSION}/survey/result_per_dimension`,
        {
          params: {
            survey_id,
            survey_schedule_id,
            access_token: getStorageAuthenticityToken(),
          },
        }
      );
      return data;
    },
    {
      enabled: !!survey_id && !!survey_schedule_id,
    }
  );
};

const useInstitutionPlansMutation = () => {
  return useMutation("institutionPlans", async ({ institution }) => {
    const { data } = await axios.post(
      `${API_VERSION}/institution_plans/${institution._id.$oid}.json`,
      institution,
      {
        params: { access_token: getStorageAuthenticityToken() },
      }
    );
    return data;
  });
};

const useInstitutionQuery = () => {
  const institution_id = getStorageInstitutionId();
  return useQuery(
    ["institutions", institution_id],
    async () => {
      const { data } = await axios.get(
        `${API_VERSION}/institutions/${institution_id}`,
        {
          params: {
            access_token: getStorageAuthenticityToken(),
          },
        }
      );
      return data;
    },
    {
      enabled: !!institution_id,
    }
  );
};

export {
  useInstitutionQuery,
  useSurveyListQuery,
  useSurveyAnswersCicleQuery,
  useSignInMutation,
  useResultPerDimensionQuery,
  useResultAvgQuery,
  useInstitutionPlansMutation,
  useCreateJWTMutation,
  useJWTValidationMutation,
};
