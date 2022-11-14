import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../components/Toast/toast";
import { apiCreateIssues } from "../services/issueServices/createIssue";
import { apiDeleteIssues } from "../services/issueServices/deleteIssue";
import { apiEditIssues } from "../services/issueServices/editIssue";
import { apiGetIssues } from "../services/issueServices/getIssue";
import { IUser } from "../services/userServices/login";

interface IIssuesContextProps {
  children: ReactNode;
}

export interface IIssues {
  type: string | undefined;
  description: string;
  date: string;
  user: IUser | null;
}

export interface IIssuesResponse {
  id: number;
  type: string;
  title: string;
  description: string;
  date: string;
  user: IUser;
  reply: string;
}

export interface IIssuesCreate extends IIssues {
  title: string;
}

interface IIssuesContext {
  createIssues(data: IIssuesCreate): void;
  deleteIssues(id: number | undefined): void;
  editIssues(data: string, id: number | undefined): void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  filteredIssues: IIssuesResponse[] | null | undefined;
  currentIssue: IIssuesResponse | null | undefined;
  setCurrentIssueFunction(id: number): void;
  modalCreate: boolean;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  modalDelete: boolean;
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  modalResponse: boolean;
  setModalResponse: React.Dispatch<React.SetStateAction<boolean>>;
  replyIssues: (replyText: string, id: number | undefined) => void;
  loading: boolean;
  date: string;
  setNewDate: React.Dispatch<React.SetStateAction<string>>;
  newIssue: string;
  setNewIssue: React.Dispatch<React.SetStateAction<string>>;
  typeIssue: string | undefined;
  setTypeIssue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const IssuesContext = createContext({} as IIssuesContext);

export const IssuesProvider = ({ children }: IIssuesContextProps) => {
  const [issuesList, setIssuesList] = useState<IIssuesResponse[]>([]);
  const [filter, setFilter] = useState<string>("todos");
  const [currentIssue, setCurrentIssue] = useState<
    IIssuesResponse | null | undefined
  >(null);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalResponse, setModalResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setNewDate] = useState<string>("");
  const [newIssue, setNewIssue] = useState<string>("");
  const [typeIssue, setTypeIssue] = useState<string | undefined>("");

  //Sempre que o estado filter mudar, a filteredIssues também muda.
  let filteredIssues =
    filter === "aviso"
      ? issuesList?.filter((elem) => elem.type === "aviso")
      : issuesList?.filter((elem) => elem.type !== "aviso");

  useEffect(() => {
    async function getIssues() {
      const token = localStorage.getItem("userToken");

      const allIssues = await apiGetIssues(token);
      setIssuesList(allIssues);
    }
    getIssues();
  }, []);

  async function createIssues(data: IIssuesCreate) {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        setLoading(true);
        await apiCreateIssues(data, token);
        await apiGetIssues(token).then((res) => setIssuesList(res));
        notifySuccess(`${data.type} criado com sucesso`);
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function editIssues(newText: string, id: number | undefined) {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        setModalEdit(false);
        setLoading(true);
        const newDescription = { description: newText };
        await apiEditIssues(newDescription, id, token);
        await apiGetIssues(token).then((res) => setIssuesList(res));
        notifySuccess("Alteração feita com sucesso!");
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function replyIssues(replyText: string, id: number | undefined) {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        setModalResponse(false);
        setLoading(true);
        const newText = { reply: replyText };
        await apiEditIssues(newText, id, token);
        await apiGetIssues(token).then((res) => setIssuesList(res));
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function deleteIssues(id: number | undefined) {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        setModalDelete(false);
        setLoading(true);
        await apiDeleteIssues(id, token);
        const newIssueList = issuesList?.filter((issue) => {
          return issue.id !== id;
        });
        setIssuesList(newIssueList);
        notifySuccess("Deletada com sucesso!");
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  const setCurrentIssueFunction = (id: number) => {
    setCurrentIssue(issuesList?.find((elem) => elem.id === id));
  };

  const globalValues: IIssuesContext = {
    createIssues: createIssues,
    deleteIssues: deleteIssues,
    editIssues: editIssues,
    setFilter: setFilter,
    filteredIssues: filteredIssues,
    currentIssue: currentIssue,
    setCurrentIssueFunction: setCurrentIssueFunction,
    modalCreate: modalCreate,
    setModalCreate: setModalCreate,
    modalDelete: modalDelete,
    setModalDelete: setModalDelete,
    modalEdit: modalEdit,
    setModalEdit: setModalEdit,
    modalResponse: modalResponse,
    setModalResponse: setModalResponse,
    replyIssues: replyIssues,
    filter: filter,
    loading: loading,
    date: date,
    setNewDate: setNewDate,
    newIssue: newIssue,
    setNewIssue: setNewIssue,
    typeIssue: typeIssue,
    setTypeIssue: setTypeIssue,
  };

  return (
    <IssuesContext.Provider value={globalValues}>
      {children}
    </IssuesContext.Provider>
  );
};
