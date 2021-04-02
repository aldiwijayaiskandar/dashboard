export class ApiResponse {
  errorMessage?: string;
  responseCode?: number;
  data?: any;

  public Convert(dto: any): ApiResponse {
    this.errorMessage = dto.errorMessage;
    this.responseCode = dto.responseCode;
    this.data = dto.data;
    return this;
  }
}
