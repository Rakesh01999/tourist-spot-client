
const AddSpot = () => {

    const handleAddSpot = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl text-center font-semibold my-3">Add Tourists Spot</h2>
            <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-24">
                <h2 className="text-3xl font-extrabold mb-4">Add a Spot</h2>
                <form onSubmit={handleAddSpot} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Photo URL */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                    {/* Spot Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourists_Spot_Name</span>
                        </label>
                        <input type="text" name="spotName" placeholder="Tourists_Spot_Name" className="input input-bordered w-full" />
                    </div>
                    {/* Country Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country_Name</span>
                        </label>
                        <input type="text" name="countryName" placeholder="Country_Name" className="input input-bordered w-full" />
                    </div>
                    {/* Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                    </div>
                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short_Description</span>
                        </label>
                        <input type="text" name="shortDescription" placeholder="Short_Description" className="input input-bordered w-full" />
                    </div>
                    {/* average_cost */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average_Cost</span>
                        </label>
                        <input type="text" name="averageCost" placeholder="Average_Cost" className="input input-bordered w-full" />
                    </div>
                    {/* seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                    </div>
                    {/* travel_time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel_Time</span>
                        </label>
                        <input type="text" name="travelTime" placeholder="Travel_Time" className="input input-bordered w-full" />
                    </div>
                    {/* totalVisitorsPerYear */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="input input-bordered w-full" />
                    </div>
                    {/* totalVisitorsPerYear */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">TotalVisitorsPerYear</span>
                        </label>
                        <input type="text" name="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="input input-bordered w-full" />
                    </div>
                    {/* Submit Button */}
                    <div className="form-control col-span-full">
                        <input type="submit" value="Add Coffee" className="btn bg-lime-400" />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddSpot;