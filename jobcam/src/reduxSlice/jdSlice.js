import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';



// read  Data
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await axios.get(`http://localhost:8008/getdata`)
    return response?.data?.data;
})
// add data
export const addUser = createAsyncThunk("user/addUser", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:8008/create`, data)
        return response?.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }

})
// remove user data
export const removeUser = createAsyncThunk("user/removeUser", async (_id) => {
    try {
        const response = await axios.delete(`http://localhost:8008/deleted/${_id}`);
        console.log("deleted data", response);
        window.location.reload();
        return response?.data?.data;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
});
//update user data
export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
    try {
        const response = await axios.post(`http://localhost:8008/update/${data._id}`, data);
        if (response.data && response?.data?.response) {
            return response?.data?.response;
        } else {
            return ('Invalid response data')
        }
    }
    catch (error) {
        return (error)
    }
})
const initialState = {
    userData: [],
    error: false,
    loading: null,
    response: ""
}
const jdSlice = createSlice({
    name: "jduser",
    initialState,
    extraReducers: (builder) => {
        builder
            // creating Data
            .addCase(addUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData.push(action.payload)
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
        // geting data
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.userData = action.payload;
                console.log("fetching Data", action.payload);
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
        //update data
        builder
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.userData?.findIndex((editform) => editform._id === action.payload._id);
                if (index !== -1) {
                    state.userData[index] = action.payload;
                    state.response = "JDlist Data update is successfully";
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            });

        builder
            // deleting Data
            .addCase(removeUser.fulfilled, (state, action) => {
                state.userData = state.userData?.filter((item) => item._id !== action.payload)
                // alert('do want to delete')
                state.response = "data deleted succeesfully!";
            })
        // 

    }
});

export default jdSlice.reducer;