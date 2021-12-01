import React from "react"

const SearchPanel = ({users, param, setParam})=>{
	return (
		<>
			<form>
				<div>
					<input type="text" value={param.name} onChange={evt => setParam({
						...param,
						name:evt.target.value
					})} />

					<select onChange={evt => {
						setParam({
							...param,
							personId: evt.target.value
						})
					}} >

					<option value={''}>负责人</option>
					{
						users.map((user,index)=><option key={index} value={user.id}>{user.name}</option>)
					}
					</select>
				</div>
			</form>
		</>
	)
}

export default SearchPanel