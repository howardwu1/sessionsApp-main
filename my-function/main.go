package main

import (
		"context"
			"encoding/json"
				//"github.com/aws/aws-lambda-go/events"
					"github.com/aws/aws-lambda-go/lambda"
						//"log"
							"time"
						)
						
						type restResponse struct {
							Body string `json:"Body"`
							StatusCode int `json:"StatusCode"`
						}

						type response struct {
								UTC time.Time `json:"utc"`
								
							}

							func handleRequest(ctx context.Context) (restResponse, error) {
									now := time.Now()
										resp := &response{
													UTC: now.UTC(),
														}
															body, err := json.Marshal(resp)
																if err != nil {
																			return restResponse{}, err
																				}
																					return restResponse{Body: string(body), StatusCode: 200}, nil
																				}

																				func main() {
																						lambda.Start(handleRequest)
																					}
