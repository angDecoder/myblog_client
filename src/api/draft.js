
export const getAllDraftsApi = async ({ ax }, thunkApi) => {
    try {
        const res = await ax.get('draft');
        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        return thunkApi.rejectWithValue({ message });
    }
}