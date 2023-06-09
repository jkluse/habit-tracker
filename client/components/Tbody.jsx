import React from "react";

const Tbody = (props) => {
	const { habits } = props;
	console.log(habits);
	return (
		<tbody className="ant-table-tbody">
			<tr
				aria-hidden="true"
				className="ant-table-measure-row"
				style={{ height: 0, fontSize: 0 }}
			></tr>
			<tr data-row-key={0}>
				<td
					className="ant-table-cell highlight-th  ant-table-cell-fix-left ant-table-cell-fix-left-last"
					style={{ position: "sticky", left: 0 }}
				>
					<div>
						<span>Running</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  active-tab  normal-cell yellow-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell highlight-th goal ">10</td>
				<td className="ant-table-cell achievement-col highlight-th  default">
					8
				</td>
			</tr>
			<tr data-row-key={1}>
				<td
					className="ant-table-cell highlight-th  ant-table-cell-fix-left ant-table-cell-fix-left-last"
					style={{ position: "sticky", left: 0 }}
				>
					<div>
						<span>Drink Water</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  active-tab  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell green-cell">
					<div style={{ textAlign: "center" }}>
						<span>
							<svg
								className="icon"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
									fill="#00b3b3"
								/>
							</svg>
						</span>
					</div>
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell  normal-cell">
					<div style={{ textAlign: "center" }} />
				</td>
				<td className="ant-table-cell highlight-th goal ">30</td>
				<td className="ant-table-cell achievement-col highlight-th  default">
					16
				</td>
			</tr>
		</tbody>
	);
};

export default Tbody;
