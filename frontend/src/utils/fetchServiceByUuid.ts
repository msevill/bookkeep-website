import { fetchFromApi } from './fetchFromApi';
import { API_BASE_URL } from '../config/api';

export interface ServiceFormField {
  id: number;
  title: string;
  SubmitButtonText: string;
  ActionEndpoint: string | null;
  Fields: {
    id: number;
    Label: string;
    Type: string;
    Placeholder: string;
    Required: boolean;
    Key?: string; // Optional key for custom field identification
  }[];
}

export interface ServiceResponse {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sgvIcon: string | null;
  uuid: string;
  formFields: ServiceFormField[];
}

export interface ServiceApiResponse {
  data: ServiceResponse[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchServiceByUuid(uuid: string): Promise<ServiceResponse | null> {
  const url = `${API_BASE_URL}/api/services?filters[uuid]=${uuid}&populate[]=formFields.Fields`;
  const data: ServiceApiResponse = await fetchFromApi(url);
  return data?.data?.[0] ?? null;
}
