import React, { useEffect } from "react";
import Layout from "../../page/layout";
import EditProfile from "../../component/edit-profile";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const PetaniProfileEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
        if (user && (user.role !== "admin" && user.role !== "petani")) {
            navigate("/dashboard");
        }
    }, [isError, user, navigate]);
    return (
        <Layout>
            <EditProfile />
        </Layout>
    );
};

export default PetaniProfileEdit;
